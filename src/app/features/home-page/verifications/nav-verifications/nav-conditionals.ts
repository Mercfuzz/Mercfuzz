import { NavOptions } from "../../home.component";

    export function isMecanica(option: NavOptions): boolean{
        if (option === NavOptions.MECANICA) {
            return true;
        }
        return false
    }

    export function isSideBar(option: NavOptions): boolean{
        if (option === NavOptions.SIDEBAR) {
            return true;
        }
        return false
    }

    export function isExp(option: NavOptions): boolean {
        if (option === NavOptions.EXP) {
            return true;
        }
        return false
    }

    export function isPool(option: NavOptions): boolean {
        if (option === NavOptions.POOL) {
            return true;
        }
        return false
    }

    export function isMidia(option: NavOptions): boolean {
        if (option === NavOptions.MIDIA) {
            return true;
        }
        return false
    }
  
    export function isNotEmpty(isEmpty: boolean): boolean {
        if (isEmpty != true) {
            return true
        }
        return false
    }
  
    export function isEmpty(isEmpty: boolean): boolean {
        if (isEmpty === true) {
            return true
        }
        return false
    }