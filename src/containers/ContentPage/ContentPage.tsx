import { useCallback, useEffect, useState } from "react";
import { IPage } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import { useParams } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const ContentPage = () => {
  const [page, setPage] = useState<IPage>({
    title: "",
    content: "",
  });
  const params = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: { data: IPage } = await axiosAPI<IPage>(
        "pages/" + params.pageName + ".json",
      );

      if (response.data) {
        const obj: IPage = {
          title: response.data.title,
          content: response.data.content,
        };
        setPage(obj);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [params.pageName]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {params.pageName ? (
            <div>
              <div>
                <h1>{page.title}</h1>
                <div>{page.content}</div>
              </div>
            </div>
          ) : (
            <p>This home page</p>
          )}
        </>
      )}
    </>
  );
};

export default ContentPage;
