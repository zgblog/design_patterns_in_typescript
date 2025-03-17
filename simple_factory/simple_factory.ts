namespace ProxyPattern {
    export interface AbstractProduct {
        method(param?: any): void;
    }

    class ConcreteProductA implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ConcreteProductA";
        }
    }
    class ConcreteProductB implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ConcreteProductB";
        }
    }

    export class SimpleFactory {
        public static createProduct(type: string): AbstractProduct | null {
            let product: null | AbstractProduct = null
            if (type === 'A') {
                product = new ConcreteProductA()
            } else if (type === 'B') {
                product = new ConcreteProductB()
            }
            return product
        }
    }
}