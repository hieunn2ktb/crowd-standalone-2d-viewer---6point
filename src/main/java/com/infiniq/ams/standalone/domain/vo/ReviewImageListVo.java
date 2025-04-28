package com.infiniq.ams.standalone.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class ReviewImageListVo extends AbstractPagingRequestVo {

    private Integer countTotal;
    private Integer lastPageIndex;

    private List<ReviewImageVo> reviewImageList;
    private List<TaskValidatorVo> taskValidatorList;
}
