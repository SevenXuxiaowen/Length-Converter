export const formula = {
    unitsName : {
        in: 'Inch',
        cm: 'Centimeter',
        mm: 'Millimeter',
        m:  'Meter'
    },
    convert(val, inVal, outVal){
        if(inVal === outVal){
            return val;
        }
        if(val === 0){
            return 0;
        }
        //Convert everything to mm 
        let mmVal = 0;
        switch(inVal){
            case 'mm':
                mmVal = val;
                break;
            case 'cm':
                mmVal = 10 * val;
                break;
            case 'm':
                mmVal = 1000 * val;
                break;
            case 'in':
                mmVal = 25.4 * val;
                break;
            default:
                break;
        }
        switch(outVal){
            case 'mm':
                return mmVal;
            case 'cm':
                return 0.1 * mmVal;
            case 'm':
                return 0.001 * mmVal;
            case 'in':
                return mmVal * 1.0 / 25.4;
            default:
                break;
        }
    }
};

