'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

type SideBarContextDataProps = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

type SideBarContextProviderProps = {
	children: ReactNode
}

export const SideBarContext = createContext<SideBarContextDataProps>(
	{} as SideBarContextDataProps,
)

export const SideBarProvider = ({ children }: SideBarContextProviderProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<SideBarContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</SideBarContext.Provider>
	)
}

export const useSideBar = () => useContext(SideBarContext)
