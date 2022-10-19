import { WebPartContext } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import styles from './CrudDemo.module.scss';

export interface ICrudDemoProps {
  context: WebPartContext;
}

export const CrudDemo = (props: ICrudDemoProps) => {

  return (
    <div>
      {props.context.pageContext.site.absoluteUrl}
    </div>
  )

}
