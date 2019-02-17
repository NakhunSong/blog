import React from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorPane from 'components/editor/EditorPane';
import PreviewPane from 'components/editor/PreviewPane';

const EditorPage = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeader/>}
                editor={<EditorPane/>}
                preview={<PreviewPane/>}
            >
            </EditorTemplate>
        </div>
    );
};

export default EditorPage;