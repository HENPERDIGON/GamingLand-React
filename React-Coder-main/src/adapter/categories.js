export const createAdaptedCat = (doc) => {
    const data = doc.data()

    const formCat= {
        id: doc.id,
        description: data.label,
        order: data.order
    }
    return formCat
}