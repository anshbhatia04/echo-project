import { ConversationIdView } from "@/modules/dashboard/ui/views/conversation-id-view";
import { Id } from "@workspace/backend/_generated/dataModel";

const page = async ({
    params,
}: {
    params: Promise<{
        conversationId: string;
    }>
}) => {
    const { conversationId } = await params;      
    return (
        <div>
            <ConversationIdView  conversationId={conversationId as Id<"conversations">}/>
        </div>
    );
};

export default page;