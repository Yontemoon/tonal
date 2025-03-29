import React from 'react'

function useDialog() {
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  React.useEffect(() => {
    const clickedOutside = (event: MouseEvent) => {
      // console.log(dialogRef.current.clie)
      console.log('event', event.target)
      console.log(dialogRef.current)
      if (dialogRef.current && event.target === dialogRef.current) {
        closeDialog()
      }
    }

    const dialogElement = dialogRef.current
    if (dialogElement) {
      dialogElement.addEventListener('click', clickedOutside)
    }

    return () => {
      if (dialogElement) {
        dialogElement.removeEventListener('click', clickedOutside)
      }
    }
  }, [])

  return { dialogRef, openDialog, closeDialog }
}

export default useDialog
