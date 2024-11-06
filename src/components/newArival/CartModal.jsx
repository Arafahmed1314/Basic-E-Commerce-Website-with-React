/* eslint-disable react/prop-types */

export default function CartModal({ cartData, handleModalClose }) {
  return (
    <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      <ul className="divide-y divide-gray-200">
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <li key={item.id} className="py-2 flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-md mr-4"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </li>
          ))
        ) : (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        )}
      </ul>
      <button
        onClick={handleModalClose}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  );
}
