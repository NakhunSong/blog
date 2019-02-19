import React from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';

const EditorPage = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeader/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPaneContainer/>}
            >
            </EditorTemplate>
        </div>
    );
};

export default EditorPage;