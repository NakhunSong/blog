import React from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import EditorTemplate from 'components/editor/EditorTemplate';

const EditorPage = () => {
    return (
        <div>
            <EditorTemplate
                header={ <EditorHeader/>}
                editor="에디터"
                preview="프리뷰"
            >
            </EditorTemplate>
        </div>
    );
};

export default EditorPage;