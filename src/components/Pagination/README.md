# Pagination
```
import { Pagination } from 'vactyory-ui';
```
## Description 
Le composant `Pagination` étend le composant `RCPagination` . [RC componants](https://react-component.github.io/pagination/?path=/story/*)


## Props

| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| disabled                     | disable pagination                                        | Bool                                               | -                                                                                      |
| defaultCurrent               | uncontrolled current page                                 | Number                                             | 1                                                                                      |
| current                      | current page                                              | Number                                             | undefined                                                                              |
| total                        | items total count                                         | Number                                             | 0                                                                                      |
| defaultPageSize              | default items per page                                    | Number                                             | 10                                                                                     |
| pageSize                     | items per page                                            | Number                                             | 10                                                                                     |
| onChange                     | page change callback                                      | Function(current, pageSize)                        | -                                                                                      |
| showSizeChanger              | show pageSize changer                                     | Bool                                               | `false` when total less then `totalBoundaryShowSizeChanger`, `true` when otherwise     |
| totalBoundaryShowSizeChanger | when total larger than it, `showSizeChanger` will be true | number                                             | 50                                                                                     |
| pageSizeOptions              | specify the sizeChanger selections                        | Array<String>                                      | ['10', '20', '50', '100']                                                              |
| onShowSizeChange             | pageSize change callback                                  | Function(current, size)                            | -                                                                                      |
| hideOnSinglePage             | hide on single page                                       | Bool                                               | false                                                                                  |
| showPrevNextJumpers          | show jump-prev, jump-next                                 | Bool                                               | true                                                                                   |
| showQuickJumper              | show quick goto jumper                                    | Bool / Object                                      | false / {goButton: true}                                                               |
| showTotal                    | show total records and range                              | Function(total, [from, to])                        | -                                                                                      |
| className                    | className of pagination                                   | String                                             | -                                                                                      |
| simple                       | when set, show simple pager                               | Object                                             | null                                                                                   |
| locale                       | to set l10n config                                        | Object                                             | [zh_CN](https://github.com/react-component/pagination/blob/master/src/locale/zh_CN.js) |
| style                        | the style of pagination                                   | Object                                             | {}                                                                                     |
| showLessItems                | show less page items                                      | Bool                                               | false                                                                                  |
| showTitle                    | show page items title                                     | Bool                                               | true                                                                                   |
| itemRender                   | custom page item renderer                                 | Function(current, type: 'page'                     | 'prev'                                                                                 | 'next' | 'jump-prev' | 'jump-next', element): React.ReactNode | `(current, type, element) => element` |
| prevIcon                     | specifict the default previous icon                       | ReactNode \| (props: PaginationProps) => ReactNode |                                                                                        |
| nextIcon                     | specifict the default previous icon                       | ReactNode \| (props: PaginationProps) => ReactNode |                                                                                        |
| jumpPrevIcon                 | specifict the default previous icon                       | ReactNode \| (props: PaginationProps) => ReactNode |                                                                                        |
| jumpNextIcon                 | specifict the default previous icon                       | ReactNode \| (props: PaginationProps) => ReactNode | |