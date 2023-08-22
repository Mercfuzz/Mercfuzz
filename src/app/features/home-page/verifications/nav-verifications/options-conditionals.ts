import { BtnId } from "../../utils/btn-id.util";

    export function isMecanica(btnId: BtnId): boolean{
        if (btnId === BtnId.MECANICA) {
            return true;
        }
        return false
    }

    export function isSideBar(btnId: BtnId): boolean{
        if (btnId === BtnId.SIDEBAR) {
            return true;
        }
        return false
    }

    export function isExp(btnId: BtnId): boolean {
        if (btnId === BtnId.EXP) {
            return true;
        }
        return false
    }

    export function isPool(btnId: BtnId): boolean {
        if (btnId === BtnId.POOL) {
            return true;
        }
        return false
    }

    export function isMidia(btnId: BtnId): boolean {
        if (btnId === BtnId.MIDIA) {
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