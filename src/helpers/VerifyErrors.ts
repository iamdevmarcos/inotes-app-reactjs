export const verifyErrors = (json: any) => {
    if(json.error !== '' && json.error !== undefined) {
        alert(json.error);
    }

    console.log(json);
}