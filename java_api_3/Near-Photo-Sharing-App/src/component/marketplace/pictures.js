import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import Picture from "./picture";
import Loader from "../utils/loader";
import { Row } from "react-bootstrap";
import { NotificationSuccess, NotificationError } from "../utils/notifications";
import { getPictures, likePicture } from "../../util/album";
import { UploadPictureOnIPFS } from '../../util/ipfs'

const Pictures = () => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);

  // function to get the list of memes
  const getPictures = useCallback(async () => {
    try {
      setLoading(true);
      setPictures(await getPictures());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const addPicture = async (data) => {
    try {      
      setLoading(true);
      UploadPictureOnIPFS(data).then((resp) => {
        getPictures();
      });
      toast(<NotificationSuccess text="Picture uploaded successfully." />);
    } catch (error) {
      toast(<NotificationError text="Failed to upload a picture." />);
    } finally {
      setLoading(false);
    }
  };

  //  function to like a picture
  const likePicture = async (id, price) => {
    try {
      await likeImage({
        id,
        price,
      }).then((resp) => getPictures());
      toast(<NotificationSuccess text="You have liked the picture" />);
    } catch (error) {
      toast(<NotificationError text="Failed to like picture." />);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getPictures();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Pictures</h1>
            <UploadPicture save={addPicture} />
          </div>
          <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
            {pictures.map((_picture) => (
              <Picture
                picture={{
                  ..._picture,
                }}
                like={like}
              />
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Pictures;