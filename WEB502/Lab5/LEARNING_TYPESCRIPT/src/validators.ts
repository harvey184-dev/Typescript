interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required', 'positive']
    };
}

export const registeredValidators: ValidatorConfig = {};

export function registerRequired(target: any, propName: string) {
    if (!registeredValidators[target.constructor.name]) {
        registeredValidators[target.constructor.name] = {};
    }

    registeredValidators[target.constructor.name][propName] = ['required'];
}

export function registerPositiveNumber(target: any, propName: string) {
    if (!registeredValidators[target.constructor.name]) {
        registeredValidators[target.constructor.name] = {};
    }

    registeredValidators[target.constructor.name][propName] = ['positive'];
}
