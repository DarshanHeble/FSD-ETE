import "./App.css";

import React, { useState } from "react";
import "./App.css";
import BreedList from "./components/BreedList";
import BreedCreate from "./components/BreedCreate";
import BreedShow from "./components/BreedShow";
import BreedEdit from "./components/BreedEdit";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [editingBreed, setEditingBreed] = useState(null);

  // Add new breed
  const handleAddBreed = (breed) => {
    setBreeds([...breeds, breed]);
  };

  // Edit breed
  const handleEditBreed = (breed) => {
    setEditingBreed(breed);
    setSelectedBreed(null);
  };

  // Update breed
  const handleUpdateBreed = (updatedBreed) => {
    setBreeds(breeds.map((b) => (b === editingBreed ? updatedBreed : b)));
    setEditingBreed(null);
  };

  // Show breed details
  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
    setEditingBreed(null);
  };

  const handleDeleteBreed = (breed) => {
    setBreeds(breeds.filter((b) => b !== breed));
  };

  // Back from details or edit
  const handleBack = () => {
    setSelectedBreed(null);
    setEditingBreed(null);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Dog Breeds Manager
      </h1>
      {!selectedBreed && !editingBreed && (
        <>
          <BreedCreate onAdd={handleAddBreed} />
          <BreedList
            breeds={breeds}
            onSelect={handleSelectBreed}
            onEdit={handleEditBreed}
            onDelete={handleDeleteBreed}
          />
        </>
      )}
      {editingBreed && (
        <BreedEdit
          breed={editingBreed}
          onUpdate={handleUpdateBreed}
          onCancel={handleBack}
        />
      )}
      {selectedBreed && <BreedShow breed={selectedBreed} onBack={handleBack} />}
    </div>
  );
}

export default App;
