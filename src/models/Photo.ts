import { Photo } from '../@types/MetaData'

const AssetModel: Photo = {
    // OEP-8 Attributes
    // https://github.com/oceanprotocol/OEPs/tree/master/8
    main: {
      type: 'photo',
      name: undefined,
      dateCreated: undefined,
      author: undefined,
      license: undefined,
      files: []
    },
    photo: {
        photo: undefined,
        uploaded_by: undefined,
        timestamp: undefined,
        tags: undefined,
        other: undefined
    }
}