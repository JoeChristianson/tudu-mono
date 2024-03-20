function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
    let timeout:number
    return function(...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    } as T;
}


export default debounce