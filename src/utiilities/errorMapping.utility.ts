type ErrorType = 'Validation error' 
                    // | 'Database error' | 
                    // 'notNull Violation' | 
                    // 'Cannot add or update a child row' | 
                    // 'Product not found' | 
                    // 'User not found';

const errorMapping: Record<ErrorType, {statusCode: number, message: string, data:string}> = {
    'Validation error': {statusCode: 400, message: 'Invalid input data', data: 'Check your request'}
};

export const mapErrorToResponse = (error: Error) => {
    console.log(error.message);
    const errorKey = error.message.split(': ')[1] as ErrorType;
    let mappedError = {statusCode: 500, message: "", data:''}
    mappedError = {...errorMapping[errorKey]}
    if(mappedError.statusCode){
        mappedError.message = `${mappedError.message}`
        return mappedError
    }
    else{
        return {statusCode: 500, message: 'Error without handler', data:error.message}
    }
}