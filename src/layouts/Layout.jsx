import { Outlet } from 'react-router-dom'
import ReactModal from 'react-modal'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import ModalProducto from '../components/ModalProducto'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useAuth } from '../hooks/useAuth'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement('#root');

export default function Layout() {

  useAuth({ middleware: 'auth' })
  const { modal } = useQuiosco();

  return (
    <>
      <div className="md:flex">

        <Sidebar />

        <div className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </div>

        <Resumen />

      </div>


      <ReactModal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </ReactModal>

      <ToastContainer />

    </>
  )
}