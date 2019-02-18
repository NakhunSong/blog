import React from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPane from 'components/editor/PreviewPane';

const EditorPage = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeader/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPane/>}
            >
            </EditorTemplate>
        </div>
    );
};

export default EditorPage;