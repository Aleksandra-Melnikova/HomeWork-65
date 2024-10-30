import { useState } from 'react';


const EditPage = () => {
  const [selectPage, setSelectPage] = useState<string>('');
  const onChangeSelect = (
    e: React.ChangeEvent<
       HTMLSelectElement
    >,
  ) => {
    setSelectPage(  e.target.value);
  };
  console.log(selectPage);


  return (
    <div className="container">
      <h2 className="text-center mt-5">Edit pages</h2>

      <div className="form-add-new-post p-5 border border-black-200 rounded-3 fs-4 mt-5 text-start">
        <form >
          <div className="form-group mb-3">
            <label htmlFor="category" className="form-label fs-4">
              {" "}
              Select page
            </label>

            <select
              required
              id="category"
              value={selectPage}
              onChange={onChangeSelect}
              name="pageName"
              className="form-select"
            >
              about contacts divisions education history
              <option className="fs-5" value="" disabled>
                Select a category
              </option>

              <option value="about">
                about
              </option>
              <option value="contacts">
                contacts
              </option>
              <option value="education">
                education
              </option>
              <option value="history">
                history
              </option>
              <option value="divisions">
                divisions
              </option>
              ))
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {" "}
              Author
            </label>
            <input
              className="mb-3 form-control"
              id="title"
              name="title"
              type="text"
              // value={form.title}
              // onChange={onChangeField}
              required
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="quoteText" className="form-label d-block">
              Content:
            </label>
            <textarea
              className="text-area mt-2 border border-black-200 rounded-3 w-100"
              id="quoteText"
              name="quoteText"
              // value={form.content}
              // onChange={onChangeField}
              required
            />
          </div>
          <button className="ps-4 pe-4 btn btn-info" type="submit">
            Save
          </button>{" "}
        </form>
      </div>
    </div>
  );
};

export default EditPage;