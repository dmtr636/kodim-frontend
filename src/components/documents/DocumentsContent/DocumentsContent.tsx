import React, {ReactNode} from 'react';
import styles from "./DocumentsContent.module.scss"
import DocumentsCard from "../DocumentsCard/DocumentsCard";

const DocumentsContent = (props: {
    children: ReactNode,
    title?: string,
}) => {
    return (
        <DocumentsCard>
            <div className={styles.content}>
                {props.title &&
                    <div className={styles.title}>
                        {props.title}
                    </div>
                }
                {props.children}
            </div>
        </DocumentsCard>
    );
};

export default DocumentsContent;