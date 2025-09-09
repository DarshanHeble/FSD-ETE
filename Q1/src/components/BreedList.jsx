export default function BreedList({ breeds, onSelect, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 max-w-md mx-auto border border-gray-200">
      <h2 className="text-xl font-extrabold text-yellow-700 mb-4 flex items-center">
        All Breeds
      </h2>
      <ul className="divide-y divide-gray-100">
        {breeds.length === 0 && (
          <li className="py-4 text-gray-500 text-center">
            No breeds added yet.
          </li>
        )}
        {breeds.map((breed, idx) => (
          <li key={idx} className="py-4">
            <div className="flex justify-between items-center">
              <span
                className="cursor-pointer text-blue-700 hover:underline font-medium"
                onClick={() => onSelect(breed)}
              >
                {breed.name}
                <span className="text-gray-500">({breed.origin})</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(breed)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded shadow hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(breed)}
                  className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-2 text-gray-700 text-sm bg-gray-50 rounded p-2 border border-gray-100">
              {breed.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
