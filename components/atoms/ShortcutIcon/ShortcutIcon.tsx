export function ShortcutIcon() {
  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/apple-touch-icon-180x180_ozp6nk.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/apple-touch-icon-152x152_bixczp.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/apple-touch-icon-120x120_b5wkox.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/apple-touch-icon-76x76_wvdxpn.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/apple-touch-icon-57x57_b7lj0b.png`}
      />
      <link
        rel="shortcut icon"
        href={`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/apple-touch-icon-57x57_b7lj0b.png`}
      />
    </>
  );
}
