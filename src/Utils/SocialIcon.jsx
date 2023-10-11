import { ButtonToolbar, IconButton } from "rsuite";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
export const SocialIcon = () => {
  return (
    <>
      <ButtonToolbar spacing={20}>
        <IconButton
          icon={<BsFacebook className="t-primary" />}
          appearance="default"
          size="md"
        />
        <IconButton
          icon={<BsYoutube className="t-danger" />}
          appearance="default"
          size="md"
        />
        <IconButton
          icon={<FaXTwitter className="t-dark" />}
          appearance="default"
          size="md"
        />
        <IconButton
          icon={<BsLinkedin className="t-primary" />}
          color="blue"
          appearance="default"
          size="md"
        />
      </ButtonToolbar>
    </>
  );
};
