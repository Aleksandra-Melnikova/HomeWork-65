import React, { useCallback, useEffect, useState } from "react";
import { IPage } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const EditPage = () => {
  const [selectPage, setSelectPage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<IPage>({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectPage(e.target.value);
  };
  console.log(selectPage);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      if (selectPage) {
        const response: { data: IPage } = await axiosAPI<IPage>(
          "pages/" + selectPage + ".json",
        );

        if (response.data) {
          const obj: IPage = {
            title: response.data.title,
            content: response.data.content,
          };
          setPage(obj);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [selectPage]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const onChangeField = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setPage((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  console.log(page);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosAPI.put("pages/" + selectPage + ".json", { ...page });
      navigate("/pages");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h2 className="text-center mt-3">Edit pages</h2>

          <div className="form-add-new-post p-5 border border-black-200 rounded-3 fs-4 mt-4 text-start">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="category" className="form-label fs-4">
                  {" "}
                  Select page
                </label>

                <select
                  required
                  onSubmit={submitForm}
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
                  <option value="about">about</option>
                  <option value="contacts">contacts</option>
                  <option value="education">education</option>
                  <option value="history">history</option>
                  <option value="divisions">divisions</option>
                  ))
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  {" "}
                  Title
                </label>
                <input
                  className="mb-3 form-control"
                  id="title"
                  name="title"
                  type="text"
                  value={page.title}
                  onChange={onChangeField}
                  required
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="content" className="form-label d-block">
                  Content:
                </label>
                <textarea
                  className="text-area mt-2 border border-black-200 rounded-3 w-100 text-field p-3"
                  id="content"
                  name="content"
                  value={page.content}
                  onChange={onChangeField}
                  required
                />
              </div>
              <button className="ps-4 pe-4 btn btn-info" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPage;
