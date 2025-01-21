const config = {
  env: {
    imagekit: {
      urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT!,
      ikpublicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY!,
      ikprivateKey: process.env.PRIVATE_KEY!,
    },
  },
};
export default config;