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
  const fetchData = useCallback(async (pageName: string) => {
    try {
      setLoading(true);
      const response: { data: IPage } = await axiosAPI<IPage>(
        "pages/" + pageName + ".json",
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
  }, []);

  useEffect(() => {
    if (params.pageName === undefined) {
      void fetchData("home");
    } else {
      void fetchData(params.pageName);
    }
  }, [fetchData, params.pageName]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <div>
              <h1 className="my-5">{page.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContentPage;
