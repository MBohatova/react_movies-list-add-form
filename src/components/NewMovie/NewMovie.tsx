import { useState } from 'react';
import { TextField } from '../TextField';

export const NewMovie = () => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  });

  const handleChange = (name: string, newValue: string) => {
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const isFormValid =
    formData.title.trim() &&
    formData.imgUrl.trim() &&
    formData.imdbUrl.trim() &&
    formData.imdbId.trim();

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={() => {
        setFormData({
          title: '',
          description: '',
          imgUrl: '',
          imdbUrl: '',
          imdbId: '',
        });
        setCount(count + 1);
      }}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={formData.title}
        onChange={newValue => handleChange('title', newValue)}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={formData.description}
        onChange={newValue => handleChange('description', newValue)}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={formData.imgUrl}
        onChange={newValue => handleChange('imgUrl', newValue)}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={formData.imdbUrl}
        onChange={newValue => handleChange('imdbUrl', newValue)}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={formData.imdbId}
        onChange={newValue => handleChange('imdbId', newValue)}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isFormValid}
            // onSubmit={() => {
            //   setFormData({
            //     title: '',
            //     description: '',
            //     imgUrl: '',
            //     imdbUrl: '',
            //     imdbId: '',
            //   });
            //   setCount(count + 1);
            // }}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
