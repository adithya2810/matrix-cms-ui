type Props = {
  onClose: () => void;
  status?: boolean;
  type?: string;
  title?: string;
  message?: string;
};
const Popup: React.FC<Props> = ({ status = false, onClose, type = 'success', title, message }) => {
  if (!status) return null;
  return (<>
    <div className="absolute z-10 inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0">
      {/* <!-- modal --> */}
      <div className="transform -translate-y-full scale-150  relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300">

        {/* <!-- button close --> */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white">
          &cross;
        </button>

        {/* <!-- header --> */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-600 capitalize">{title ? title : type}</h2>
        </div>

        {/* <!-- body --> */}
        <div className="w-full p-3" dangerouslySetInnerHTML={{ __html: message }}></div>

        {/* <!-- footer --> */}
        <div className="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3">
          {/* <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">Save</button> */}
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none"
          >OK</button>
        </div>
      </div>
    </div>
  </>);
};

export default Popup;
