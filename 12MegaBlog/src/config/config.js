const config ={

    appwriteUrl : String(import.meta.env.VITE_APPwRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPwRITE_PROJECT_ID),
    appwriteDataBaseId: String(import.meta.env.VITE_APPwRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPwRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPwRITE_BUCKET_ID)
}


export default config