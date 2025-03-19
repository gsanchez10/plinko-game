import Modal from 'react-modal'
Modal.setAppElement('#__next') // Set the app element for accessibility
const CustomModal = Modal as unknown as React.FC<any>

export default CustomModal
