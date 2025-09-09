export default function BreedShow({ breed, onBack }) {
  if (!breed) return null;
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 max-w-md mx-auto border border-gray-200">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-extrabold text-gray-800">Breed Details</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-24">Name:</span>
          <span className="text-gray-900 text-lg">{breed.name}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-24">Origin:</span>
          <span className="text-gray-900 text-lg">{breed.origin}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Description:</span>
          <p className="text-gray-800 mt-1 bg-gray-50 rounded p-2 border border-gray-100">
            {breed.description}
          </p>
        </div>
      </div>
      <button
        onClick={onBack}
        className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 rounded shadow hover:from-blue-600 hover:to-blue-800 transition"
      >
        ← Back
      </button>
    </div>
  );
}
