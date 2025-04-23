'use client'

import * as React from 'react'
import * as Toast from '@radix-ui/react-toast'
import clsx from 'clsx'
import { CheckCircle, XCircle, Info } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info'

export function ToastNotification({
	open,
	setOpen,
	title,
	message,
	type = 'info',
}: {
	open: boolean
	setOpen: (open: boolean) => void
	title: string
	message: string
	type?: ToastType
}) {
	const icon = {
		success: <CheckCircle className="text-green-600" size={20} />,
		error: <XCircle className="text-red-600" size={20} />,
		info: <Info className="text-blue-600" size={20} />,
	}[type]

	const borderColor = {
		success: 'border-green-500',
		error: 'border-red-500',
		info: 'border-blue-500',
	}[type]

	return (
		<Toast.Provider swipeDirection="right">
			<Toast.Root
				open={open}
				onOpenChange={setOpen}
				className={clsx(
					`flex items-start gap-3 rounded-md border-l-4 bg-white p-4 shadow-lg`,
					borderColor
				)}
			>
				{icon}
				<div>
					<Toast.Title className="font-semibold">{title}</Toast.Title>
					<Toast.Description className="text-sm text-gray-700">{message}</Toast.Description>
				</div>
			</Toast.Root>
			<Toast.Viewport className="fixed bottom-4 right-4 z-50 w-[320px] max-w-full" />
		</Toast.Provider>
	)
}
