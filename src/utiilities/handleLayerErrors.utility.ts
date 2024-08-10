export const handleLayersError = (layer: string, error: any) =>{
    if(error instanceof Error){
        throw new Error(`${layer} error: ${error.message}`)
    }
    else{
        throw new Error(`Unkown error: ${error.message}`)
    }
}