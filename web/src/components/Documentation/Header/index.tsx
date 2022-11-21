import * as React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { selectDocumentationData } from '../../../modules';

export const DocumentationHeader: React.FC = () => {
    const intl = useIntl();
    const documentation = useSelector(selectDocumentationData);

    return (
        <div className="pg-documentation-item pg-documentation-header">
            <h3>mSamex USER API V2</h3>
            <div className="pg-documentation-header__description">
                <span>API for mSamex exchange</span>
            </div>
            <div className="pg-documentation-header__version">
                <h4>{intl.formatMessage({ id: 'page.documentation.header.version.title' })}&nbsp;{documentation?.info?.version}</h4>
            </div>
            <div className="pg-documentation-header__contact-info">
                <span>{intl.formatMessage({ id: 'page.documentation.header.contactInfo.title' })}</span>
                <a
                    href="https://www.meshyazilim.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.Meshyazilim.com
                </a>
                <a href="mailto: info@meshyazilim.com">
                    info@meshyazilim.com
                </a>
            </div>
 
        </div>
    );
};
