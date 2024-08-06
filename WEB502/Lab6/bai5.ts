function Autobind(_: any, 2: string, descriptor: Property Descriptor) {
    const originalMethod = descriptor.value;
    const adj Descriptor: Property Descriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adj Descriptor;
}
class Printer {
    message = 'This works!';
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();
p.showMessage();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);