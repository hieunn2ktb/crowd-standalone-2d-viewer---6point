package com.infiniq.ams.standalone.domain.vo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.i18n.LocaleContextHolder;

import java.io.Serializable;

public class AbstractPagingRequestVo implements Serializable {
    private static final long serialVersionUID = 1L;
    @Getter
    @Setter
    private long              startRow         = 0;
    @Getter
    private long              pageIndex        = 1;    // 현재 페이지
    @Getter
    private long              pageSize         = 15;   // 페이지 당 Row 수
    @Getter
    @Setter
    private String            sortColumn       = "";   // 정렬 Index 명(컬럼명)
    @Getter
    @Setter
    private String            sortType         = "asc";
    @Getter
    private boolean           sortAscending    = true; // 정렬 방식
    @Getter
    @Setter
    private boolean           isPaging         = true;

    @JsonIgnore
    @Getter
    private final String lang = LocaleContextHolder.getLocale().getLanguage();

    public void setPageIndex(long _pageIndex) {
        this.pageIndex = _pageIndex;
        calcPaging();
    }

    public void setPageSize(long _pageSize) {
        this.pageSize = _pageSize;
        calcPaging();
    }

    public void setSortAscending(boolean _sortAscending) {
        this.sortAscending = _sortAscending;
        if (_sortAscending) {
            sortType = "asc";
        } else {
            sortType = "desc";
        }
    }

    private void calcPaging() {
        this.startRow = (this.pageIndex - 1) * this.pageSize;
    }
}
