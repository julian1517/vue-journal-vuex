import 'setimmediate';
import cloudinary from "cloudinary";
import axios from "axios";

import uploadImage from "@/modules/daybook/helpers/uploadImage";

cloudinary.config({
    cloud_name: 'ds47xkenf',
    api_key:'411225989187629',
    api_secret:'NL9LqhAFu5Tx_JUCvSpOL1sSPKU'
})



describe('Pruebas en el uploadImage', () => {
    test('debe de cargar un archivo y retornar el url', async (  ) => {

        const { data } = await axios.get('https://res.cloudinary.com/ds47xkenf/image/upload/v1679281252/rmows6ne2pni4nknjmt8.jpg',{
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')
        //Tomar el ID
        
        const segments = url.split('/')
        
        const imageId = segments[ segments.length - 1 ].replace('.jpg','')
        await cloudinary.v2.api.delete_resources( imageId, {}, () => {
            
        })
        


    })
})