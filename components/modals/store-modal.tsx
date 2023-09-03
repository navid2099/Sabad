"use client";

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"

export const StoreModal = () => {

    const StoreModal = useStoreModal();
    
    
    return(
        <Modal
        title="Create store"
        description="Add a new Store"
        isOpen={StoreModal.isOpen}
        onClose={StoreModal.onClose}
        >
            Feature create store form
        </Modal>
    );
}