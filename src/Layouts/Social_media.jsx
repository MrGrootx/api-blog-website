import Facebook from "../assets/social_medias_icons/facebook.png";
import Discord from "../assets/social_medias_icons/discord.png";
import x from "../assets/social_medias_icons/twitter.png";
import youtube from "../assets/social_medias_icons/youtube.png";

const Social_media = () => {
  return (
    <>
      <div>
        <div className="border-b py-2 flex justify-between m-4 cursor-pointer border-b-gray-200">
          <div>
            <img src={Facebook} alt="Facebook" className="w-8" />
          </div>
          <div>
            <h3>FaceBook</h3>
          </div>
        </div>
        <div className="flex justify-between m-4 cursor-pointer border-b-gray-200 border-b py-2">
          <div>
            <img src={Discord} alt="Facebook" className="w-8" />
          </div>
          <div>
            <h3>Discord</h3>
          </div>
        </div>
        <div className="flex justify-between m-4 cursor-pointer border-b-gray-200 border-b py-2">
          <div>
            <img src={x} alt="Facebook" className="w-8" />
          </div>
          <div>
            <h3>X</h3>
          </div>
        </div>
        <div className="flex justify-between m-4 cursor-pointer border-b-gray-200 border-b py-2">
          <div>
            <img src={youtube} alt="Facebook" className="w-8" />
          </div>
          <div>
            <h3>Youtube</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social_media;
