  export default function generatePicture(src) {
    // Parse the original src to get string fragments to build new values with
    const _src = parse(src);
    // Build an object representing a picture element and its children
    let { dir, name, ext, rest } = _src;

    let mobileImage = `${dir}${name}-m${ext}${rest}`;
    let desktopImage = `${dir}${name}${ext}${rest}`;

    const _picture = {
      sources: [
        {
          srcset: desktopImage,
          media: `(min-width: 992px)`,
        }
      ],
      img: {
        src: mobileImage,
      },
    }

    return _picture;
  }