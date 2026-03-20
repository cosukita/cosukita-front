/**
 * STORAGE_NAME - Enum
 * @description Defines the storage names used in the application for persisting state with Zustand. Each entry corresponds to a specific store that will be persisted in localStorage or another storage mechanism supported by Zustand's persist middleware.
 * @enum {string}
 * @example
 * ```typescript
 * import { STORAGE_NAME } from "@/contexts/storageName";
 *
 * const store = useBearStore();
 *
 * store.persist.rehydrate(STORAGE_NAME.bearStorage);
 * ```
 */
export enum STORAGE_NAME {
  bearStorage,
}
