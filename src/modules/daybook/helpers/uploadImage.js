import axios from "axios"



const uploadImage = async ( file ) => {

    console.log('file from uploadImage', file);

    if( !file ) return

    try{

        const formData =  new FormData()
        formData.append( 'upload_preset', 'upload-images-journal' )
        formData.append( 'file', file )

        const url = 'https://api.cloudinary.com/v1_1/dlyjzpzbq/image/upload'
        const { data } = await axios.post( url, formData )

        console.log(data)

        return data.secure_url

    } catch ( error ){
        console.error("No se pudo subir a Cloudinary")
        console.log( error );
        return null
    }

}


export default uploadImage