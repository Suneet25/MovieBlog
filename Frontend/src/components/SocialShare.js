const {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} = require("next-share");

function FacebookShare({ url, title }) {
  return (
    <FacebookShareButton
      url={url}
      title={title}
      hashtag={"#nextshare"}
      separator=":- "
    >
      <FacebookIcon size={30} round />
    </FacebookShareButton>
  );
}

function TelegramShare({ url, title }) {
  return (
    <TelegramShareButton
      url={url}
      title={title}
      hashtag={"#nextshare"}
      separator=":- "
    >
      <TelegramIcon size={30} round />
    </TelegramShareButton>
  );
}

function TwitterShare({ url, title }) {
  return (
    <TwitterShareButton
      url={url}
      title={title}
      hashtag={"#nextshare"}
      separator=":- "
    >
      <TwitterIcon size={30} round />
    </TwitterShareButton>
  );
}

function WhatsappShare({ url, title }) {
  return (
    <WhatsappShareButton
      url={url}
      title={title}
      hashtag={"#nextshare"}
      separator=":- "
    >
      <WhatsappIcon size={30} round />
    </WhatsappShareButton>
  );
}

export { FacebookShare, TelegramShare, TwitterShare, WhatsappShare };
