import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';

const EditorPage = () => {
    return (
        <div>
            <EditorTemplate
                header={<EditorHeaderContainer/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPaneContainer/>}
            >
            </EditorTemplate>
        </div>
    );
};

export default EditorPage;