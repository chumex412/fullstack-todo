/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { authenticate, getUser } from '../_selectors/userSelector';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const authenticated = useSelector(state => authenticate(state))
  const user = useSelector(state => getUser(state))

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewUser, setViewUser] = useState({})
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(function () {
    if(user?.admin) {
      getAllUsers()
    }
  }, [authenticated])

  // Get all users for Admin page
  const getAllUsers = async () => {
    
    try {
      const res = await fetch(`${window.location.origin}/api/users/`)

      const response = await res.json()

      if(!response.success) {
        throw new Error(response.message)
      }

      const usersData = response.users.filter(user => !user.admin)

      setUsers(usersData)

    } catch(err) {
      console.log(err.message)
    }
  } 

  const openModal = (id) => {
    setShowModal(true)
    
    const user = users.find(user => user.userId === id)

    setViewUser(user)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const sidebarToggler = () => {
    setShowSidebar(prev => !prev)
  }

  return (
    <AppContext.Provider value={{
      users,
      open: openModal,
      close: closeModal,
      show: showModal,
      showSidebar,
      toggleSidebar: sidebarToggler,
      user: viewUser
    }}>
      {
        children
      }
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;